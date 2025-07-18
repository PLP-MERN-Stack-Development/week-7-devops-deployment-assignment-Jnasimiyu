import React, { useState } from 'react';
import axios from 'axios';

const ReportBug = () => {
  const [form, setForm] = useState({
    title: '',
    description: '',
    severity: 'Medium',
    status: 'Open',
    reportedBy: '',
    assignedTo: '',
    tags: '',
    stepsToReproduce: '',
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('/api/bugs', form);
      alert('Bug reported successfully!');
    } catch (error) {
      console.error(error);
      alert('Failed to report bug');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto mt-8 p-4 border rounded">
      <h2 className="text-xl font-bold mb-4">Report New Bug</h2>
      <input name="title" placeholder="Bug Title" onChange={handleChange} required className="block w-full mb-2" />
      <textarea name="description" placeholder="Description" onChange={handleChange} required className="block w-full mb-2" />
      <select name="severity" onChange={handleChange} className="block w-full mb-2">
        <option>Low</option><option>Medium</option><option>High</option>
      </select>
      <input name="reportedBy" placeholder="Your name" onChange={handleChange} className="block w-full mb-2" />
      <input name="assignedTo" placeholder="Assign to (optional)" onChange={handleChange} className="block w-full mb-2" />
      <input name="tags" placeholder="Tags (comma-separated)" onChange={handleChange} className="block w-full mb-2" />
      <textarea name="stepsToReproduce" placeholder="Steps to reproduce" onChange={handleChange} className="block w-full mb-2" />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
    </form>
  );
};

export default ReportBug;
