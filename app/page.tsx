import Link from 'next/link'

async function getInfo() {
  try {
    const base = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'
    const res = await fetch(`${base}/api/info`, { cache: 'no-store' })
    return res.ok ? res.json() : { stack: 'Next.js App Router', renderer: 'server', runtime: 'Node.js' }
  } catch {
    return { stack: 'Next.js App Router', renderer: 'server', runtime: 'Node.js' }
  }
}

export default async function Home() {
  const info = await getInfo()
  return (
    <main className="min-h-screen flex flex-col" style={{ background: '#0c0a09', color: '#fef3c7' }}>
      <header style={{ background: '#1c1917', borderBottom: '1px solid #292524', position: 'sticky', top: 0, zIndex: 10 }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '1rem 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ fontSize: '1.25rem', fontWeight: 800 }}>
            ⚡ TAQAT <span style={{ color: '#f59e0b' }}>Hosting</span>
          </div>
          <nav style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <Link href="https://taqat.academy" style={{ color: '#a8a29e', fontSize: '.9rem', textDecoration: 'none' }}>Academy</Link>
            <Link href="https://sso.taqat.work" style={{ background: '#f59e0b', color: '#0c0a09', padding: '.4rem 1rem', borderRadius: 6, fontSize: '.85rem', fontWeight: 600, textDecoration: 'none' }}>Sign In</Link>
          </nav>
        </div>
      </header>

      <section style={{ maxWidth: 1100, margin: '0 auto', padding: '5rem 2rem 3rem', textAlign: 'center' }}>
        <div style={{ display: 'inline-block', background: '#1c1917', border: '1px solid #f59e0b', color: '#f59e0b', fontSize: '.75rem', fontWeight: 600, padding: '.3rem .9rem', borderRadius: 99, textTransform: 'uppercase', letterSpacing: '.05em', marginBottom: '1.5rem' }}>
          Next.js App Router · Server Component
        </div>
        <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 800, lineHeight: 1.15, marginBottom: '1.25rem' }}>
          Server-Side Rendering<br /><span style={{ color: '#f59e0b' }}>Made Simple</span>
        </h1>
        <p style={{ color: '#a8a29e', fontSize: '1.15rem', maxWidth: 600, margin: '0 auto 2rem' }}>
          This page is a React Server Component — rendered on the server. The cards below fetch live data from an API route.
        </p>
      </section>

      <section style={{ maxWidth: 1100, margin: '0 auto', padding: '0 2rem 2rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
        {[
          { label: 'Stack', value: info.stack },
          { label: 'Render Mode', value: info.renderer },
          { label: 'Runtime', value: info.runtime },
          { label: 'Version', value: info.version || process.version },
        ].map(item => (
          <div key={item.label} style={{ background: '#1c1917', border: '1px solid #292524', borderRadius: 12, padding: '1.5rem' }}>
            <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#f59e0b', marginBottom: '.25rem' }}>{item.value}</div>
            <div style={{ color: '#a8a29e', fontSize: '.875rem' }}>{item.label}</div>
          </div>
        ))}
      </section>

      <section style={{ background: '#1c1917', borderTop: '1px solid #292524', borderBottom: '1px solid #292524', padding: '3rem 2rem', margin: '1rem 0' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'right' }} dir="rtl">
          <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#f59e0b', marginBottom: '1rem' }}>مرحباً بك في طاقت</h2>
          <p style={{ color: '#a8a29e', lineHeight: 2, fontSize: '1.05rem', marginBottom: '1.5rem' }}>
            منصة طاقت للاستضافة تدعم Next.js مع العرض من جانب الخادم،
            مما يتيح لك بناء تطبيقات ويب سريعة وقابلة للتوسع بدون أي إعداد معقد.
          </p>
          <Link href="https://taqat.academy" style={{ display: 'inline-block', background: '#f59e0b', color: '#0c0a09', padding: '.6rem 1.5rem', borderRadius: 8, fontWeight: 700, textDecoration: 'none' }}>
            ابدأ الآن ←
          </Link>
        </div>
      </section>

      <footer style={{ background: '#1c1917', borderTop: '1px solid #292524', marginTop: 'auto', padding: '1.5rem 2rem' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
          <span style={{ fontWeight: 700 }}>⚡ TAQAT Academy</span>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            {[
              { href: 'https://taqat.academy', label: 'Academy' },
              { href: 'https://sso.taqat.work', label: 'SSO Login' },
              { href: 'https://brightgaza.com', label: 'Bright Gaza' },
            ].map(l => (
              <Link key={l.href} href={l.href} style={{ color: '#a8a29e', fontSize: '.875rem', textDecoration: 'none' }}>{l.label}</Link>
            ))}
          </div>
          <span style={{ color: '#78716c', fontSize: '.75rem' }}>Stack: Next.js App Router · Hosted on TAQAT Hosting</span>
        </div>
      </footer>
    </main>
  )
}
