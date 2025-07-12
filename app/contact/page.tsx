import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

const ContactPage = () => {
  return (
    <BackgroundBeamsWithCollision className="relative min-h-screen w-full bg-[#111111] text-white overflow-hidden">

      {/* Centered Contact Box */}
      <div className="relative z-10 flex items-center justify-center min-h-screen  px-4 py-12">
        <div className="bg-black/0 backdrop-blur-sm  rounded-2xl p-8 shadow-xl mt-25 max-w-3xl w-full border border-white/10">
          <h1 className="text-4xl font-bold mb-4 text-[#ecdf8c]">
            Contact Us 🎶
          </h1>
          <p className="mb-8 text-gray-300">
            Want to learn an instrument or join our music lessons? Fill out the form and we’ll get back to you shortly.
          </p>

          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-white mb-1">Name</label>
              <input
                type="text"
                placeholder="Your full name"
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ecdf8c]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-1">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ecdf8c]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-1">Message</label>
              <textarea
                rows={4}
                placeholder="Tell us what you're looking to learn..."
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ecdf8c]"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#9c7945] hover:bg-[#816b4a] text-white font-semibold py-2 px-6 rounded-lg transition duration-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  );
};

export default ContactPage;
