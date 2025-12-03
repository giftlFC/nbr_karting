import Image from 'next/image';
import { Zen_Dots } from "next/font/google";

const zenDots = Zen_Dots({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function NewsPage() {
  return (
    <div className={`section ${zenDots.className}`}>
      <h2>News / Race Reports</h2>
      <div className="card">
        <div style={{marginBottom: '2rem', position: 'relative', width: '100%', height: '300px', borderRadius: '8px', overflow: 'hidden'}}>
          <Image
            src="/images/placeholder-news-f400.jpg"
            alt="F400 Round Race"
            fill
            style={{objectFit: 'cover'}}
          />
        </div>
        <article>
          <h3>F400 Round – FK Business Park, Benoni</h3>
          <p>NBR’s young drivers took on a highly competitive F400 sprint race with incredible results. Out of a strong 23-driver grid, all four of our racers finished inside the Top 10.</p>
        </article>

        <div style={{marginBottom: '2rem', marginTop: '2rem', position: 'relative', width: '100%', height: '300px', borderRadius: '8px', overflow: 'hidden'}}>
          <Image
            src="/images/placeholder-news-f200.jpg"
            alt="F200 Sprint Race"
            fill
            style={{objectFit: 'cover'}}
          />
        </div>
        <article style={{marginTop:12}}>
          <h3>F200 Sprint Race – Benoni</h3>
          <p>Calvin Laubscher fought through a front tyre puncture in qualifying and still managed 5th overall during the weekend - pure determination.</p>
        </article>

        <div style={{marginBottom: '2rem', marginTop: '2rem', position: 'relative', width: '100%', height: '300px', borderRadius: '8px', overflow: 'hidden'}}>
          <Image
            src="/images/placeholder-news-rotax.jpg"
            alt="Rotax and Rok Regionals"
            fill
            style={{objectFit: 'cover'}}
          />
        </div>
        <article style={{marginTop:12}}>
          <h3>National Series – Rotax & Rok Regionals</h3>
          <p>Our Rotax and Rok campaigns continue to show podiums and breakthroughs across Micro Max and Junior categories.</p>
        </article>
      </div>
    </div>
  );
}
