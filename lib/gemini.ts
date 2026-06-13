import { GoogleGenerativeAI } from "@google/generative-ai"

// Initialize the Google Generative AI client
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "")

// Default model to use
const defaultModel = "gemini-2.5-flash"

export async function generateGeminiResponse(prompt: string, systemPrompt?: string, model: string = defaultModel) {
  try {
    // Create a generative model
    const generativeModel = genAI.getGenerativeModel({ model })

    // Combine system prompt and user prompt
    const fullPrompt = systemPrompt ? `${systemPrompt}\n\n${prompt}` : prompt

    // Generate content
    const result = await generativeModel.generateContent({
      contents: [{ role: "user", parts: [{ text: fullPrompt }] }],
    })

    const response = result.response
    const text = response.text()

    return { success: true, data: text }
  } catch (error) {
    console.error("Error generating Gemini response:", error)
    return {
      success: false,
      error: "Failed to generate response. Please try again.",
    }
  }
}

// Direct API implementation as fallback
export async function generateGeminiResponseDirect(prompt: string) {
  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [{ text: prompt }],
            },
          ],
        }),
      },
    )

    const data = await response.json()

    if (data.error) {
      throw new Error(data.error.message || "API Error")
    }

    // Extract text from the response
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text || ""
    return { success: true, data: text }
  } catch (error) {
    console.error("Error with direct Gemini API call:", error)
    return {
      success: false,
      error: "Failed to generate response. Please try again.",
    }
  }
}

export async function analyzeMedicalReport(reportText: string, language = "english") {
  const systemPrompt = `You are a helpful medical assistant that analyzes medical reports and explains them in simple terms. 
  Provide a clear summary of the medical findings, any concerning issues, and recommendations in ${language}.`

  const prompt = `Please analyze this medical report and explain it in simple, non-technical language:
  
  ${reportText}
  
  Provide:
  1. A summary of key findings
  2. Any concerning issues that need attention
  3. Recommendations for follow-up
  4. Explanation of any medical terms used in the report
  
  Format your response using Markdown for better readability.`

  try {
    const result = await generateGeminiResponse(prompt, systemPrompt)
    if (!result.success) {
      return await generateGeminiResponseDirect(prompt)
    }
    return result
  } catch (error) {
    return await generateGeminiResponseDirect(prompt)
  }
}

export async function suggestMedicineAlternatives(medicineName: string, language = "english") {
  const systemPrompt = `You are a helpful medical assistant that provides information about medicine alternatives. 
  Provide information in ${language}.`

  const prompt = `Please suggest cheaper alternatives for the medicine "${medicineName}".
  
  Include:
  1. Generic alternatives if available
  2. Similar medicines in the same class
  3. Approximate price comparisons
  4. Important notes about switching medications (e.g., consult doctor first)
  
  Format the information clearly using Markdown and make it easy to understand for someone without medical background.`

  try {
    const result = await generateGeminiResponse(prompt, systemPrompt)
    if (!result.success) {
      return await generateGeminiResponseDirect(prompt)
    }
    return result
  } catch (error) {
    return await generateGeminiResponseDirect(prompt)
  }
}

export async function simplifyMedicalJargon(medicalText: string, language = "english") {
  const systemPrompt = `You are a helpful medical translator that explains complex medical terms in simple language. 
  Provide explanations in ${language}.`

  const prompt = `Please explain the following medical terms or text in simple language:
  
  "${medicalText}"
  
  Break down any complex terms and explain what they mean in everyday language. Format your response using Markdown for better readability.`

  try {
    const result = await generateGeminiResponse(prompt, systemPrompt)
    if (!result.success) {
      return await generateGeminiResponseDirect(prompt)
    }
    return result
  } catch (error) {
    return await generateGeminiResponseDirect(prompt)
  }
}

export async function analyzeHealthProfile(profileData: any, language = "english") {
  const systemPrompt = `You are a helpful health assistant that analyzes health profiles and provides insights. 
  Provide information in ${language}.`

  const prompt = `Please analyze this health profile and provide insights:
  
  ${JSON.stringify(profileData, null, 2)}
  
  Include:
  1. Overall health assessment
  2. Potential health risks based on the data
  3. Recommendations for improving health metrics
  4. Areas that look good and should be maintained
  
  Format the information in a clear, supportive way using Markdown for better readability.`

  try {
    const result = await generateGeminiResponse(prompt, systemPrompt)
    if (!result.success) {
      return await generateGeminiResponseDirect(prompt)
    }
    return result
  } catch (error) {
    return await generateGeminiResponseDirect(prompt)
  }
}

export async function generateMentalHealthResponse(mood: string, context: string, language = "english") {
  const systemPrompt = `You are an empathetic mental health assistant. Provide supportive, kind responses to help users with their emotional wellbeing.
  Respond in ${language}.`

  const prompt = `The user has indicated they are feeling "${mood}". They provided this additional context: "${context}".
  
  Please provide:
  1. A validating, empathetic response acknowledging their feelings
  2. 1-2 gentle suggestions that might help with this mood
  3. A positive affirmation or encouraging message
  
  Keep the tone warm, supportive and non-judgmental. Format your response using Markdown for better readability.`

  try {
    const result = await generateGeminiResponse(prompt, systemPrompt)
    if (!result.success) {
      return await generateGeminiResponseDirect(prompt)
    }
    return result
  } catch (error) {
    return await generateGeminiResponseDirect(prompt)
  }
}

export const supportedLanguages = [
  { code: "en", name: "English" },
  { code: "ta", name: "Tamil" },
  { code: "hi", name: "Hindi" },
  { code: "te", name: "Telugu" },
  { code: "ml", name: "Malayalam" },
  { code: "kn", name: "Kannada" },
]
