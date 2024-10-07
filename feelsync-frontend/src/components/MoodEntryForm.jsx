import React, { useState } from 'react';

function MoodEntryForm() {
  const [mood, setMood] = useState('');
  const [note, setNote] = useState('');

  const handleMoodEntry = (e) => {
    e.preventDefault();
    // send this data to the backend.
    console.log({ mood, note });
    setMood('');
    setNote('');
  };

  return (
    <form className="mood-entry-form" onSubmit={handleMoodEntry}>
      <label>Mood:</label>
      <select value={mood} onChange={(e) => setMood(e.target.value)}>
        <option value="">Select your mood</option>
        <option value="happy">😊 Happy</option>
        <option value="sad">😢 Sad</option>
        <option value="neutral">😐 Neutral</option>
      </select>
      <label>Note:</label>
      <textarea
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Add a note about your mood"
      />
      <button type="submit">Submit Mood</button>
    </form>
  );
}

export default MoodEntryForm;