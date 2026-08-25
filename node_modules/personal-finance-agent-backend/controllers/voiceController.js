export const processVoice = async (req, res) => {
  try {
    const { message } = req.body;

    if (!message || !message.trim()) {
      return res.status(400).json({
        success: false,
        message: "Message is required",
      });
    }

    const userMessage = message.toLowerCase().trim();

    // Check if user wants page explanation
    const explainPage =
      userMessage.includes("explain") ||
      userMessage.includes("describe") ||
      userMessage.includes("tell me about") ||
      userMessage.includes("what is this page") ||
      userMessage.includes("explain this page") ||
      userMessage.includes("explain the page") ||
      userMessage.includes("explain everything") ||
      userMessage.includes("tell me everything");

    // ==========================================
    // PAGE NAVIGATION COMMANDS
    // ==========================================

    const navigationCommands = [
      {
        keywords: ["open dashboard", "go to dashboard", "dashboard"],
        page: "/dashboard",
        reply: "Opening Dashboard.",
      },
      {
        keywords: [
          "open transactions",
          "open transaction",
          "transactions",
          "transaction",
        ],
        page: "/transactions",
        reply: "Opening Transactions page.",
      },
      {
        keywords: [
          "open analytics",
          "analytics",
          "analytic",
        ],
        page: "/analytics",
        reply: "Opening Analytics page.",
      },
      {
        keywords: [
          "open settings",
          "settings",
          "setting",
        ],
        page: "/settings",
        reply: "Opening Settings page.",
      },
      {
        keywords: [
          "open income",
          "income",
        ],
        page: "/income",
        reply: "Opening Income page.",
      },
      {
        keywords: [
          "open budget",
          "budget",
          "budget planner",
        ],
        page: "/budget",
        reply: "Opening Budget Planner.",
      },
      {
        keywords: [
          "open expenses",
          "expenses",
          "expense",
          "expense tracker",
        ],
        page: "/expenses",
        reply: "Opening Expenses page.",
      },
      {
        keywords: [
          "open advisor",
          "advisor",
          "open ai advisor",
        ],
        page: "/advisor",
        reply: "Opening AI Advisor.",
      },
      {
        keywords: [
          "open profile",
          "profile",
        ],
        page: "/profile",
        reply: "Opening Profile page.",
      },
      {
        keywords: [
          "open help",
          "help",
        ],
        page: "/help",
        reply: "Opening Help page.",
      },
    ];

    // Check navigation commands
    for (const command of navigationCommands) {
      if (
        command.keywords.some((keyword) =>
          userMessage.includes(keyword)
        )
      ) {
        return res.json({
          success: true,
          action: "OPEN_PAGE",
          page: command.page,
          explain: explainPage,
          aiResponse: explainPage
            ? `${command.reply} I will also explain this page.`
            : command.reply,
        });
      }
    }

    // ==========================================
    // SHOW TRANSACTIONS
    // ==========================================

    const transactionKeywords = [
      "show my transactions",
      "show current transactions",
      "current transactions",
      "show expenses",
      "my expenses",
      "show spending",
      "my spending",
    ];

    const isTransactionRequest = transactionKeywords.some((keyword) =>
      userMessage.includes(keyword)
    );

    if (isTransactionRequest) {
      const expenses = await Expense.find().sort({ date: -1 });

      if (expenses.length === 0) {
        return res.json({
          success: true,
          aiResponse: "You don't have any transactions yet.",
        });
      }

      const totalExpense = expenses.reduce(
        (sum, item) => sum + item.amount,
        0
      );

      let answer = `You have ${expenses.length} transactions. `;
      answer += `Your total expenses are ₹${totalExpense}. `;
      answer += "Latest transactions are: ";

      expenses.slice(0, 5).forEach((expense, index) => {
        answer += `${index + 1}. ${expense.name}, ₹${expense.amount}, ${expense.category}. `;
      });

      return res.json({
        success: true,
        aiResponse: answer,
      });
    }

    // ==========================================
    // NVIDIA AI
    // ==========================================

    const completion = await nvidia.chat.completions.create({
      model: "meta/llama-3.1-8b-instruct",
      messages: [
        {
          role: "system",
          content:
            "You are an AI Finance Assistant. Answer finance questions clearly.",
        },
        {
          role: "user",
          content: message,
        },
      ],
      temperature: 0.5,
      max_tokens: 500,
    });

    const reply = completion.choices[0].message.content;

    return res.json({
      success: true,
      aiResponse: reply,
    });

  } catch (error) {
    console.error("Voice Assistant Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to process request.",
      error: error.message,
    });
  }
};