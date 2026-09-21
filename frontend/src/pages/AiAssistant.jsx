import { useState } from 'react';

export default function AiAssistant() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleAsk(e) {
    e.preventDefault();
    setLoading(true);
    setError('');
    setAnswer('');
    try {
      const res = await fetch('/api/ai/ask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Request failed');
      setAnswer(data.answer);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <h1>AI Assistant</h1>
      <p>Ask about onboarding/offboarding status or HR policy.</p>
      <form onSubmit={handleAsk} style={{ display: 'flex', gap: '0.5rem', maxWidth: 480 }}>
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="e.g. What's pending for my exit clearance?"
          style={{ flex: 1 }}
        />
        <button type="submit" disabled={loading || !question}>
          {loading ? 'Asking...' : 'Ask'}
        </button>
      </form>
      {error && <p style={{ color: 'red' }}>{error} (backend AI logic is not implemented yet)</p>}
      {answer && <p>{answer}</p>}
    </div>
  );
}
