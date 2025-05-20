import { useNavigate } from 'react-router-dom';
import './Page4.css';

function Page4({ formData, setFormData }) {
  const navigate = useNavigate();

  return (
    <div className="page4-container">
      <h2>Love Story</h2>

      <textarea
        className="page4-textarea"
        placeholder="How did your love story begin?"
        value={formData.love_story || ''}
        onChange={(e) => setFormData({ ...formData, love_story: e.target.value })}
      />

      <textarea
        className="page4-textarea"
        placeholder="Proposal Story"
        value={formData.proposal_details || ''}
        onChange={(e) => setFormData({ ...formData, proposal_details: e.target.value })}
      />

      <textarea
        className="page4-textarea"
        placeholder="First Date"
        value={formData.first_date || ''}
        onChange={(e) => setFormData({ ...formData, first_date: e.target.value })}
      />

      <textarea
        className="page4-textarea"
        placeholder="First Trip Together"
        value={formData.first_trip || ''}
        onChange={(e) => setFormData({ ...formData, first_trip: e.target.value })}
      />

      <div className="button-group">
        <button className="page4-button" onClick={() => navigate('/page3')}>Back</button>
        <button className="page4-button" onClick={() => navigate('/page5')}>Next</button>
      </div>
    </div>
  );
}

export default Page4;
