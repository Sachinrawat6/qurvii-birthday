import { useState, useEffect } from 'react';

const App = () => {
  const [showGif, setShowGif] = useState(false);
  const [countdown, setCountdown] = useState(3);

  const gif = 'https://i.pinimg.com/originals/9a/9c/03/9a9c03ad9ec52915de81679da7c7ace4.gif';
  const targetLink = 'https://made-by-many.qurvii.com/12030';

  useEffect(() => {
    if (!showGif) return;

    // Countdown tick every 1s
    const interval = setInterval(() => {
      setCountdown((prev) => (prev > 0 ? prev - 1 : 0));
    }, 3000);

    // Redirect exactly 3s after showing
    const redirect = setTimeout(() => {
      window.location.href = targetLink;
    }, 3000);

    return () => {
      clearInterval(interval);
      clearTimeout(redirect);
    };
  }, [showGif]);

  if (showGif) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center overflow-hidden">
        <img src={gif} alt="Made by Many" className="w-full h-full object-contain" />

        {/* Countdown badge */}
        <div className="absolute top-6 left-1/2 -translate-x-1/2 flex text-4xl items-center gap-2 bg-white/10 backdrop-blur-md text-white px-5 py-2 rounded-full border border-white/20 shadow-lg">
          <span className=" font-medium tracking-wide">Launch in</span>
          <span
            key={countdown}
            className=" font-bold tabular-nums animate-[ping_1s_ease-out] inline-block"
          >
            {countdown}
          </span>
          <span className=" tracking-wide">{countdown === 1 ? 'second' : 'seconds'}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex flex-col justify-center items-center gap-6 px-6">
      <div className="max-w-lg text-center space-y-3">
        <h1 className="font-bold text-4xl md:text-5xl  text-slate-900 tracking-tight">
          <span className="animate-pulse"> Happy Birthday</span>
          <span>
            <img
              src="https://cdn.shopify.com/s/files/1/0605/5798/3989/files/Png_logo_with_Tag_Line_6124d00c-03ce-4400-9b2d-adbca250c94a.png?v=1706097391"
              alt="qurvii"
              className="w-90"
            />
          </span>
        </h1>
      </div>

      <button
        onClick={() => setShowGif(true)}
        className="bg-rose-700 hover:bg-rose-800 active:scale-95 text-white font-semibold py-3 px-8 rounded-full text-lg shadow-lg shadow-rose-700/20 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-rose-300"
      >
        Launch Made By Many
      </button>
    </div>
  );
};

export default App;
