import { useNavigate } from 'react-router-dom';
import './Page3.css';

function Page3({ formData, setFormData }) {
  const navigate = useNavigate();

  return (
    <div className="page3-container">
      <h2>Events & Live Stream</h2>

      <textarea
        className="page3-textarea"
        placeholder="Event Schedule"
        value={formData.event_schedule || ''}
        onChange={(e) => setFormData({ ...formData, event_schedule: e.target.value })}
      />

      <input
        className="page3-input"
        type="text"
        placeholder="Live Stream Link"
        value={formData.live_stream_link || ''}
        onChange={(e) => setFormData({ ...formData, live_stream_link: e.target.value })}
      />

      <div className="button-group">
        <button className="page3-button" onClick={() => navigate('/page2')}>Back</button>
        <button className="page3-button" onClick={() => navigate('/page4')}>Next</button>
      </div>
    </div>
  );
}

export default Page3;
