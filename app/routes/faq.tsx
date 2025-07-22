import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";

export const meta: MetaFunction = () => [
  { title: "Frequently Asked Questions - Ketivee AI Documentation" },
  { name: "description", content: "Answers to common questions about Ketivee AI, troubleshooting, and best practices." },
];

const faqs = [
  {
    question: "What is Ketivee AI?",
    answer: "Ketivee AI is a suite of AI models and tools for developers, including RipkaAI, AAdi AI, Yug AI, and more, designed for easy integration into your applications."
  },
  {
    question: "How do I get started?",
    answer: "Visit the Quick Start guide from the homepage or documentation sidebar. Install the SDK, initialize your client, and make your first API call."
  },
  {
    question: "Where can I get support?",
    answer: "You can join the community forum or contact support via the Support page linked in the documentation."
  },
  {
    question: "Is there a free tier?",
    answer: "Yes, Ketivee AI offers a free tier with limited usage. See the pricing section for details."
  },
  {
    question: "How do I report a bug?",
    answer: "Open an issue on our GitHub repository or use the feedback form in the documentation."  
  }
];

export default function FAQPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-8">
      <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-4">
        <Link to="/" className="hover:text-gray-700 dark:hover:text-gray-300">Home</Link>
        <span>/</span>
        <span className="text-gray-900 dark:text-white">FAQ</span>
      </nav>
      <div className="flex items-center space-x-3 mb-8">
        <div className="p-2 bg-green-100 dark:bg-green-900 rounded-lg">
          <QuestionMarkCircleIcon className="w-6 h-6 text-green-600 dark:text-green-400" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Frequently Asked Questions</h1>
      </div>
      <section className="space-y-8">
        {faqs.map((faq, idx) => (
          <div key={idx} className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 shadow">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{faq.question}</h2>
            <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
