import axios from "axios";

const fetchQuestions = async (req, res) => {
  try {
    const { subjects, number = 40, type = "utme" } = req.body;

    if (!subjects || !Array.isArray(subjects) || subjects.length === 0) {
      return res.status(400).json({ error: "Subjects array is required" });
    }

    // build subject params dynamically — subject1, subject2, etc.
    const subjectParams = subjects.reduce((acc, subject, index) => {
      acc[`subject${index + 1}`] = subject;
      return acc;
    }, {});

    const response = await axios.get(
      "https://questions.aloc.com.ng/api/v2/q-subjects-group",
      {
        params: {
          number,
          type,
          ...subjectParams,
        },
        headers: {
          AccessToken: "ALOC-39abc30193e29ebf8ea2",
        },
      }
    );

    return res.status(200).json({
      success: true,
      questions: response.data.data || [],
    });

  } catch (error) {
    console.error("Error fetching questions:", error.message);
    return res.status(500).json({ error: "Failed to fetch questions" });
  }
};

const startExam= async (req, res)=>{

}

export default {fetchQuestions, startExam};
