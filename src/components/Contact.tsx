import { Mail, Linkedin, Github, Check, Terminal } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [step, setStep] = useState(1);
  const [gitAdd, setGitAdd] = useState('');
  const [gitCommit, setGitCommit] = useState('');
  const [gitPush, setGitPush] = useState('');
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error' | 'loading'>('idle');

  // Refs for focusing
  const gitAddRef = useRef<HTMLInputElement>(null);
  const gitCommitRef = useRef<HTMLInputElement>(null);
  const gitPushRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (step === 1 && gitAddRef.current) gitAddRef.current.focus();
    if (step === 2 && gitCommitRef.current) gitCommitRef.current.focus();
    if (step === 3 && gitPushRef.current) gitPushRef.current.focus();
  }, [step]);

  // Regex for extracting quoted string (accepts straight and curly quotes)
  const extractQuoted = (input: string) => {
    const match = input.match(/[\"“”]([^\"“”]+)[\"“”]/);
    return match ? match[1] : '';
  };

  // Step 1: git add . "message"
  const handleGitAdd = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGitAdd(e.target.value);
    const trimmed = e.target.value.trim();
    if (/^git add \. [\"“”][^\"“”]+[\"“”]$/.test(trimmed)) {
      setMessage(extractQuoted(trimmed));
      setStep(2);
    } else {
      setMessage('');
      setStep(1);
    }
  };

  // Step 2: git commit -m "email_id"
  const handleGitCommit = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGitCommit(e.target.value);
    const trimmed = e.target.value.trim();
    if (/^git commit -m [\"“”][^\"“”]+[\"“”]$/.test(trimmed)) {
      setEmail(extractQuoted(trimmed));
      setStep(3);
    } else {
      setEmail('');
      setStep(2);
    }
  };

  // Step 3: git push origin Jimil1407
  const handleGitPush = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGitPush(e.target.value);
    const trimmed = e.target.value.trim();
    if (trimmed === 'git push origin Jimil1407') {
      setStep(4);
    } else {
      setStep(3);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      await emailjs.send(
        'service_ceu6fvm',
        'template_d5dzinh',
        { message, email },
        '_6sm242Gg7yEYfl-2'
      );
      setStatus('success');
      setGitAdd('');
      setGitCommit('');
      setGitPush('');
      setMessage('');
      setEmail('');
      setStep(1);
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <section className="py-20 bg-black" id="contact">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Let's Build Something Together</h2>
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Have an interesting project or just want to chat about tech? I'm always open to new opportunities and collaborations.
        </p>
        {/* Git-themed contact form */}
        <div className="flex flex-col items-center justify-center mt-12">
          <div className="text-center mb-4">
            <h3 className="text-white text-xl font-semibold mb-2">
              drop a message for me in the git style !
            </h3>
            <p className="text-green-400 font-mono">
              git add . "your message for me" &amp;&amp; git commit -m "your mail id"
            </p>
          </div>
          <form onSubmit={handleSubmit} className="w-full max-w-2xl bg-black rounded-xl shadow-lg p-8 mb-4 border border-gray-800">
            <div className="text-green-400 font-mono mb-4">
              <div>$ git add . "{message}"</div>
              <div>$ git commit -m "{email}"</div>
              <div>$ git push origin Jimil1407</div>
            </div>
            <input
              ref={gitAddRef}
              type="text"
              placeholder='git add . "your message"'
              className="w-full bg-[#f7fafd] text-gray-500 font-mono px-4 py-3 rounded-md outline-none focus:ring-2 focus:ring-green-400 transition mb-2"
              value={gitAdd}
              onChange={handleGitAdd}
              disabled={step > 1}
              required
              autoCorrect="off"
              autoCapitalize="off"
              spellCheck={false}
            />
            {step >= 2 && (
              <input
                ref={gitCommitRef}
                type="text"
                placeholder='git commit -m "your email"'
                className="w-full bg-[#f7fafd] text-gray-500 font-mono px-4 py-3 rounded-md outline-none focus:ring-2 focus:ring-green-400 transition mb-2"
                value={gitCommit}
                onChange={handleGitCommit}
                disabled={step > 2}
                required
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck={false}
              />
            )}
            {step >= 3 && (
              <input
                ref={gitPushRef}
                type="text"
                placeholder='git push origin Jimil1407'
                className="w-full bg-[#f7fafd] text-gray-500 font-mono px-4 py-3 rounded-md outline-none focus:ring-2 focus:ring-green-400 transition mb-2"
                value={gitPush}
                onChange={handleGitPush}
                disabled={step > 3}
                required
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck={false}
              />
            )}
            {step === 4 && (
              <button
                type="submit"
                className="mt-4 w-full bg-green-500 text-white font-mono py-2 rounded-md hover:bg-green-600 transition"
                disabled={status === 'loading'}
              >
                {status === 'loading' ? 'Sending...' : 'Send git message'}
              </button>
            )}
            {status === 'success' && (
              <div className="mt-2 text-green-400 font-mono">Message sent successfully!</div>
            )}
            {status === 'error' && (
              <div className="mt-2 text-red-400 font-mono">Failed to send message. Please try again.</div>
            )}
          </form>
        </div>
        {/* Footer with social links */}
        <div className="mt-12 flex flex-col items-center">
          <div className="flex gap-6 justify-center items-center">
            <a href="mailto:jimil.devs@gmail.com" className="text-gray-300 hover:text-green-400 transition" title="Email">
              <Mail size={28} />
            </a>
            <a href="https://github.com/Jimil1407" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-green-400 transition" title="GitHub">
              <Github size={28} />
            </a>
            <a href="https://www.linkedin.com/in/jimil-digaswala-b44973192/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-green-400 transition" title="LinkedIn">
              <Linkedin size={28} />
            </a>
            <a href="https://dev.to/jimil_digaswala_eb1ee38db" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-green-400 transition" title="DEV Community">
              <Terminal size={28} />
            </a>
          </div>
          <div className="text-gray-500 text-xs mt-4">&copy; {new Date().getFullYear()} Jimil Digaswala</div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
