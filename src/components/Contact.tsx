import { Mail, Linkedin, Github, Copy, Check, X } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleEmailClick = () => {
    const email = 'jimil.devs@gmail.com';
    
    // Only copy to clipboard - no mailto to avoid third-party handlers
    copyToClipboard(email);
  };

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      textArea.style.top = '-999999px';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  return (
    <section className="py-20 bg-black" id="contact">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Let's Build Something Together</h2>
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Have an interesting project or just want to chat about tech? I'm always open to new opportunities and collaborations.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-black/80 p-6 rounded-xl border border-gray-700 hover:border-white transition-colors cursor-pointer" onClick={handleEmailClick}>
            <div className="mb-4 flex justify-center"><Mail size={32} /></div>
            <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
            <p className="text-gray-400">jimil.devs@gmail.com</p>
            {copied && (
              <div className="mt-2 text-sm text-green-400 flex items-center justify-center gap-1">
                <Check size={16} />
                Email copied to clipboard!
              </div>
            )}
          </div>
          
          <div className="bg-black/80 p-6 rounded-xl border border-gray-700 hover:border-white transition-colors cursor-pointer" onClick={() => window.open('https://www.linkedin.com/in/jimil-digaswala-b44973192/', '_blank')}>
            <div className="mb-4 flex justify-center"><Linkedin size={32} /></div>
            <h3 className="text-lg font-semibold text-white mb-2">LinkedIn</h3>
                  <p className="text-gray-400">Connect with me</p>
          </div>
          
          <div className="bg-black/80 p-6 rounded-xl border border-gray-700 hover:border-white transition-colors cursor-pointer" onClick={() => window.open('https://x.com/jimiltwt', '_blank')}  >
            <div className="mb-4 flex justify-center"><X size={32} /></div>
            <h3 className="text-lg font-semibold text-white mb-2">X (Twitter) </h3>
            <p className="text-gray-400">My thoughts on tech</p>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
       
          <button className="border border-gray-600 text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-all duration-200 transform hover:scale-105" onClick={handleEmailClick}>
            Send a Message
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
