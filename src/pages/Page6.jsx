import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../supabaseClient';
import './Page6.css';

function Page6({ formData, setFormData }) {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    setLoading(true);
    const { data, error } = await supabase.from('wedding_details').insert([formData]);
    setLoading(false);

    if (error) {
      alert('❌ Error: ' + error.message);
    } else {
      alert('✅ Data saved successfully!');
      navigate('/success'); // Optional: Navigate to a success page or home
    }
  };

  return (
    <div className="page6-container">
      <h2>Contact & Parent Messages</h2>

      <textarea
        className="page6-textarea"
        placeholder="Message from Bride's Parents"
        value={formData.message_from_brides_parents || ''}
        onChange={(e) => setFormData({ ...formData, message_from_brides_parents: e.target.value })}
      />

      <textarea
        className="page6-textarea"
        placeholder="Message from Groom's Parents"
        value={formData.message_from_grooms_parents || ''}
        onChange={(e) => setFormData({ ...formData, message_from_grooms_parents: e.target.value })}
      />

      <input
        className="page6-input"
        type="email"
        placeholder="Couple's Email"
        value={formData.couple_email || ''}
        onChange={(e) => setFormData({ ...formData, couple_email: e.target.value })}
      />

      <input
        className="page6-input"
        type="tel"
        placeholder="Couple's Phone"
        value={formData.couple_phone || ''}
        onChange={(e) => setFormData({ ...formData, couple_phone: e.target.value })}
      />

      <textarea
        className="page6-textarea"
        placeholder="Bride's Parents Info"
        value={formData.brides_parents_info || ''}
        onChange={(e) => setFormData({ ...formData, brides_parents_info: e.target.value })}
      />

      <textarea
        className="page6-textarea"
        placeholder="Groom's Parents Info"
        value={formData.grooms_parents_info || ''}
        onChange={(e) => setFormData({ ...formData, grooms_parents_info: e.target.value })}
      />

      <div className="page6-buttons">
        <button className="page6-button" onClick={() => navigate('/page5')}>Back</button>
        <button className="page6-button" onClick={handleSubmit} disabled={loading}>
          {loading ? 'Submitting...' : 'Submit'}
        </button>
      </div>
    </div>
  );
}

export default Page6;
