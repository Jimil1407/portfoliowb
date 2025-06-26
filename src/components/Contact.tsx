
const Contact = () => {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Let's Build Something Together</h2>
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Have an interesting project or just want to chat about tech? I'm always open to new opportunities and collaborations.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="text-3xl mb-4">📧</div>
            <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
            <p className="text-gray-400">fardeen@example.com</p>
          </div>
          
          <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="text-3xl mb-4">💼</div>
            <h3 className="text-lg font-semibold text-white mb-2">LinkedIn</h3>
            <p className="text-gray-400">Connect with me</p>
          </div>
          
          <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="text-3xl mb-4">🐙</div>
            <h3 className="text-lg font-semibold text-white mb-2">GitHub</h3>
            <p className="text-gray-400">Check out my code</p>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-200 transition-all duration-200 transform hover:scale-105">
            Schedule a Call
          </button>
          <button className="border border-gray-600 text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-all duration-200 transform hover:scale-105">
            Send a Message
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
