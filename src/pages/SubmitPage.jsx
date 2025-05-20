import { useState } from 'react';
import { supabase } from '../supabaseClient';
import './SubmitPage.css';

function SubmitPage({ formData }) {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    const { data, error } = await supabase.from('wedding_details').insert([formData]);
    setLoading(false);
    if (error) {
      alert('❌ Error: ' + error.message);
    } else {
      alert('✅ Data saved successfully!');
    }
  };

  return (
    <div className="submit-container">
      <h2>Submit Your Wedding Details</h2>
      <div className="submit-preview">
        <section>
          <h3>Event Schedule</h3>
          <p>{formData.event_schedule || 'N/A'}</p>

          <h3>Live Stream Link</h3>
          <p>{formData.live_stream_link || 'N/A'}</p>
        </section>

        <section>
          <h3>Love Story</h3>
          <p>{formData.love_story || 'N/A'}</p>

          <h3>Proposal Story</h3>
          <p>{formData.proposal_details || 'N/A'}</p>

          <h3>First Date</h3>
          <p>{formData.first_date || 'N/A'}</p>

          <h3>First Trip Together</h3>
          <p>{formData.first_trip || 'N/A'}</p>
        </section>

        <section>
          <h3>About the Couple</h3>
          <p><strong>Bride:</strong> {formData.about_bride || 'N/A'}</p>
          <p><strong>Groom:</strong> {formData.about_groom || 'N/A'}</p>
        </section>

        <section>
          <h3>Logistics</h3>
          <p><strong>Accommodation Options:</strong> {formData.accommodation_options || 'N/A'}</p>
          <p><strong>Transportation Info:</strong> {formData.transportation_info || 'N/A'}</p>
          <p><strong>Local Attractions:</strong> {formData.local_attractions || 'N/A'}</p>
        </section>

        <section>
          <h3>Parent Messages</h3>
          <p><strong>Bride's Parents:</strong> {formData.message_from_brides_parents || 'N/A'}</p>
          <p><strong>Groom's Parents:</strong> {formData.message_from_grooms_parents || 'N/A'}</p>
        </section>

        <section>
          <h3>Contact Info</h3>
          <p><strong>Email:</strong> {formData.couple_email || 'N/A'}</p>
          <p><strong>Phone:</strong> {formData.couple_phone || 'N/A'}</p>
        </section>

        <section>
          <h3>Family Details</h3>
          <p><strong>Bride's Parents Info:</strong> {formData.brides_parents_info || 'N/A'}</p>
          <p><strong>Groom's Parents Info:</strong> {formData.grooms_parents_info || 'N/A'}</p>
        </section>
      </div>

      <button className="submit-button" onClick={handleSubmit} disabled={loading}>
        {loading ? 'Submitting...' : 'Submit'}
      </button>
    </div>
  );
}

export default SubmitPage;
