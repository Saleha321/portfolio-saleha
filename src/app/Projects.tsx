export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="p-4 border rounded-lg shadow-md">
          <h3 className="text-xl font-semibold">Multimodal Housing Price Prediction</h3>
          <p className="text-sm text-gray-600">AI project using CNN + tabular data</p>
        </div>
        <div className="p-4 border rounded-lg shadow-md">
          <h3 className="text-xl font-semibold">AI Chatbot using RAG</h3>
          <p className="text-sm text-gray-600">Retrieval-augmented chatbot using LangChain</p>
        </div>
      </div>
    </section>
  )
}
