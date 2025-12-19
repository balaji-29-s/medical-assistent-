# Medical Assistant - Your AI-Powered Healthcare Companion

> A revolutionary healthcare management platform that combines the power of AI with intuitive document processing. This Next.js application streamlines medical workflows, enhances patient care, and provides intelligent insights through advanced document analysis and natural language processing. Perfect for healthcare professionals and patients seeking a modern, secure, and efficient way to manage medical information.

## 🌟 Key Features

### 🤖 AI-Powered Medical Assistance
- Intelligent medical document analysis and processing
- Smart symptom assessment and preliminary guidance
- Natural language understanding for medical queries
- Context-aware medical information retrieval
- Empathetic AI chatbot for medical support
- Medical term simplification and explanation

### 🌐 Multilingual Support
- Full support for multiple Indian languages:
  - English
  - Tamil (தமிழ்)
  - Hindi (हिन्दी)
  - Telugu (తెలుగు)
  - Malayalam (മലയാളം)
  - Kannada (ಕನ್ನಡ)
- Seamless language switching across all features
- Culturally aware medical translations
- Localized medical terminology

### 🚨 Emergency Health Card
- Digital emergency health information card
- QR code generation for quick access
- Shareable emergency information
- Printable physical card option
- Critical health information storage:
  - Blood type
  - Medical conditions
  - Allergies
  - Current medications
  - Emergency contacts
- Instant sharing capabilities
- Downloadable and printable formats

### 📄 Advanced Document Management
- PDF document processing and analysis
- Medical record organization and management
- Automated document categorization
- Secure document storage and retrieval
- OCR capabilities for scanned medical documents
- Report analysis and insights

### 💊 Medicine Management
- Medicine alternatives finder
- Cost comparison for medications
- Recent search history
- Multilingual medicine information
- Alternative medicine suggestions
- Price optimization recommendations

### 🧠 Mental Health Support
- Mood tracking and analysis
- Emotional support chatbot
- Mental health insights
- Personalized coping strategies
- Progress tracking
- Multilingual mental health support

### 💡 Smart User Interface
- Modern, intuitive design with dark/light mode support
- Responsive layout for all devices
- Interactive data visualization
- Real-time feedback and suggestions
- Accessible components following WCAG guidelines
- Glass-morphism design elements

### 🔒 Security & Privacy
- HIPAA-compliant data handling
- Secure document processing
- Encrypted data transmission
- Privacy-focused architecture
- Local storage for sensitive data
- Secure sharing mechanisms

### 📊 Data Analysis & Visualization
- Medical data insights and trends
- Interactive charts and graphs
- Customizable dashboards
- Export capabilities for reports
- Health profile analytics
- Treatment progress tracking

## 🛠️ Tech Stack

- **Framework**: Next.js 15.2.4
- **Language**: TypeScript
- **UI Components**: Radix UI
- **Styling**: Tailwind CSS
- **Form Handling**: React Hook Form
- **PDF Processing**: PDF.js, PDF-Lib
- **AI Integration**: Google Generative AI
- **Data Visualization**: Recharts
- **State Management**: React Hooks
- **Document Processing**: Tesseract.js for OCR
- **Authentication**: NextAuth.js
- **QR Code Generation**: QR Server API
- **File Processing**: HTML2Canvas

## 🚀 Getting Started

1. Clone the repository:
```bash
git clone https://github.com/balaji-29-s/medical-assistent-.git
cd medical-assistant
```

2. Install dependencies:
```bash
pnpm install
```

3. Create a `.env.local` file in the root directory and add your environment variables:
```env
GOOGLE_AI_API_KEY=your_api_key_here
```

4. Run the development server:
```bash
pnpm dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📋 Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

## 🏗️ Project Structure

```
├── app/              # Next.js app directory
├── components/       # Reusable UI components
├── lib/             # Utility functions and configurations
├── public/          # Static assets
├── styles/          # Global styles
└── test/            # Test files
```

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Radix UI for the accessible components
- Google AI for the powerful language model
- All other open-source contributors

## ⚠️ Important Note

This application is designed to assist healthcare professionals and patients in managing medical information. It is not a replacement for professional medical advice, diagnosis, or treatment. Always consult with qualified healthcare providers for medical decisions. 
