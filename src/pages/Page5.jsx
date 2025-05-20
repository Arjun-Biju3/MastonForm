import { useNavigate } from 'react-router-dom';
import './Page5.css';

function Page5({ formData, setFormData }) {
  const navigate = useNavigate();
  return (
    <div className="page5-container">
      <h2>About the Couple & Logistics</h2>

      <textarea
        className="page5-textarea"
        placeholder="About Bride"
        value={formData.about_bride || ''}
        onChange={(e) => setFormData({ ...formData, about_bride: e.target.value })}
      />

      <textarea
        className="page5-textarea"
        placeholder="About Groom"
        value={formData.about_groom || ''}
        onChange={(e) => setFormData({ ...formData, about_groom: e.target.value })}
      />

      <textarea
        className="page5-textarea"
        placeholder="Accommodation Options"
        value={formData.accommodation_options || ''}
        onChange={(e) => setFormData({ ...formData, accommodation_options: e.target.value })}
      />

      <textarea
        className="page5-textarea"
        placeholder="Transportation Info"
        value={formData.transportation_info || ''}
        onChange={(e) => setFormData({ ...formData, transportation_info: e.target.value })}
      />

      <textarea
        className="page5-textarea"
        placeholder="Local Attractions"
        value={formData.local_attractions || ''}
        onChange={(e) => setFormData({ ...formData, local_attractions: e.target.value })}
      />

      <div className="page5-buttons">
        <button className="page5-button" onClick={() => navigate('/page4')}>Back</button>
        <button className="page5-button" onClick={() => navigate('/page6')}>Next</button>
      </div>
    </div>
  );
}

export default Page5;
