import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { url } = await request.json();

    // 1. Asli Website ka HTML fetch karo
    const response = await fetch(url);
    const html = await response.text();

    // 2. Simple Extraction (Regex use karke bina library ke)
    const title = html.match(/<title>(.*?)<\/title>/)?.[1] || "No Title Found";
    const description = html.match(/<meta name="description" content="(.*?)"/)?.[1] || "No Description Found";
    const h1 = html.match(/<h1.*?>(.*?)<\/h1>/)?.[1] || "No H1 Found";
    
    // 3. Images aur Alt tags ginn lo
    const images = (html.match(/<img /g) || []).length;
    const imagesWithoutAlt = (html.match(/<img (?!.*?alt=)/g) || []).length;

    // 4. Dynamic Score Calculation (Asli logic)
    let dynamicScore = 100;
    if (title === "No Title Found") dynamicScore -= 20;
    if (title.length > 60) dynamicScore -= 10;
    if (description === "No Description Found") dynamicScore -= 20;
    if (h1 === "No H1 Found") dynamicScore -= 15;
    if (imagesWithoutAlt > 0) dynamicScore -= 10;

    const realData = {
      title,
      description,
      h1,
      images,
      imagesWithoutAlt,
      score: Math.max(0, dynamicScore) // Score 0 se niche na jaye
    };

    return NextResponse.json(realData);
  } catch (error) {
    return NextResponse.json({ error: "Failed to analyze website. Make sure URL is correct (with https://)" }, { status: 500 });
  }
}
