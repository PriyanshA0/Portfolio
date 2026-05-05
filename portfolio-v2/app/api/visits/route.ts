export async function GET() {
  try {
    const response = await fetch('https://api.countapi.xyz/hit/priyanshu-mishra-portfolio/live', {
      cache: 'no-store'
    });

    if (!response.ok) {
      throw new Error('Failed to increment visit count');
    }

    const data = (await response.json()) as { value?: number };

    return Response.json({ count: typeof data.value === 'number' ? data.value : null });
  } catch {
    return Response.json({ count: null }, { status: 200 });
  }
}