import { useNavigate } from 'react-router-dom';
import './Page2.css';

function Page2({ formData, setFormData }) {
  const navigate = useNavigate();

  const handleNext = () => {
    if (!formData.wedding_date || !formData.venue_name || !formData.venue_address) {
      alert("Please fill in all wedding details before proceeding.");
      return;
    }
    navigate('/page3');
  };

  return (
    <div className="page2-container">
      <h2>Wedding Info</h2>

      <input
        className="page2-input"
        type="date"
        placeholder="Wedding Date"
        value={formData.wedding_date || ''}
        onChange={(e) => setFormData({ ...formData, wedding_date: e.target.value })}
      />

      <input
        className="page2-input"
        type="text"
        placeholder="Venue Name"
        value={formData.venue_name || ''}
        onChange={(e) => setFormData({ ...formData, venue_name: e.target.value })}
      />

      <input
        className="page2-input"
        type="text"
        placeholder="Venue Address"
        value={formData.venue_address || ''}
        onChange={(e) => setFormData({ ...formData, venue_address: e.target.value })}
      />

      <div className="button-group">
        <button className="page2-button" onClick={() => navigate('/')}>Back</button>
        <button className="page2-button" onClick={handleNext}>Next</button>
      </div>
    </div>
  );
}

export default Page2;
