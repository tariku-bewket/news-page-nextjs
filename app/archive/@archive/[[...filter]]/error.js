'use client';

export default function Error({ error }) {
  return (
    <div id='error'>
      <h2>An error occurred</h2>
      <p>{error.message || 'Failed to load archive page'}</p>
    </div>
  );
}
