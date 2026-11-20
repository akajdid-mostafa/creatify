export default function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-20 md:py-24 bg-zinc-100">
      <div className="px-4 md:px-8 max-w-[1400px] mx-auto flex flex-col md:flex-row gap-12">
        <div className="md:w-1/2">
          <div className="inline-block bg-zinc-200 text-zinc-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-6">Contact &amp; Support</div>
          <h2 className="text-5xl md:text-7xl font-bold text-zinc-900 tracking-tight mb-6">Get In Touch.</h2>
          <p className="text-lg text-zinc-600 mb-12">Have questions or need help? Our team is here to help you every step of the way.</p>

          <div className="space-y-6">
            <div>
              <p className="text-xs text-zinc-500 uppercase font-bold tracking-wider mb-1">Email:</p>
              <a href="#" className="text-xl font-medium text-zinc-900 hover:underline">hello@creatify.com</a>
            </div>
            <div>
              <p className="text-xs text-zinc-500 uppercase font-bold tracking-wider mb-1">Phone:</p>
              <p className="text-xl font-medium text-zinc-900">+1 800 123 4567</p>
            </div>
            <div>
              <p className="text-xs text-zinc-500 uppercase font-bold tracking-wider mb-1">Address:</p>
              <p className="text-xl font-medium text-zinc-900">123 Design Avenue, New York, NY</p>
            </div>
          </div>
        </div>

        <div className="md:w-1/2 bg-white p-8 md:p-12 rounded-[2rem] shadow-sm border border-zinc-100">
          <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
            <div>
              <label className="block text-xs font-bold text-zinc-500 uppercase tracking-wider mb-2">Full Name</label>
              <input type="text" placeholder="Jane Smith" className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 focus:outline-none focus:border-zinc-900 focus:bg-white transition-colors" />
            </div>
            <div>
              <label className="block text-xs font-bold text-zinc-500 uppercase tracking-wider mb-2">Your Email</label>
              <input type="email" placeholder="jane@company.com" className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 focus:outline-none focus:border-zinc-900 focus:bg-white transition-colors" />
            </div>
            <div>
              <label className="block text-xs font-bold text-zinc-500 uppercase tracking-wider mb-2">Select Plan</label>
              <div className="grid grid-cols-2 gap-4">
                <label className="cursor-pointer">
                  <input type="radio" name="plan" className="peer sr-only" defaultChecked />
                  <div className="text-center bg-zinc-50 border border-zinc-200 rounded-xl py-3 peer-checked:border-zinc-900 peer-checked:bg-zinc-900 peer-checked:text-white transition-all font-medium">Pro</div>
                </label>
                <label className="cursor-pointer">
                  <input type="radio" name="plan" className="peer sr-only" />
                  <div className="text-center bg-zinc-50 border border-zinc-200 rounded-xl py-3 peer-checked:border-zinc-900 peer-checked:bg-zinc-900 peer-checked:text-white transition-all font-medium">Enterprise</div>
                </label>
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold text-zinc-500 uppercase tracking-wider mb-2">Message</label>
              <textarea rows="4" placeholder="Type your message..." className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 focus:outline-none focus:border-zinc-900 focus:bg-white transition-colors resize-none"></textarea>
            </div>
            <button type="submit" className="w-full bg-[#09090b] text-white font-bold py-4 rounded-xl hover:bg-zinc-800 transition-colors">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}
