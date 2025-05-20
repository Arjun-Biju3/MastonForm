import { useNavigate } from 'react-router-dom';
import './Page1.css';

function Page1({ formData, setFormData }) {
  const navigate = useNavigate();

  const handleNext = () => {
    if (!formData.bride_full_name || !formData.groom_full_name) {
      alert("Please fill in both Bride's and Groom's full names.");
      return;
    }
    navigate('/page2');
  };

  return (
    <div className="page1-container">
      <h2>Couple Info</h2>

      <input
        className="page1-input"
        type="text"
        placeholder="Bride's Full Name"
        value={formData.bride_full_name || ''}
        onChange={(e) => setFormData({ ...formData, bride_full_name: e.target.value })}
      />

      <input
        className="page1-input"
        type="text"
        placeholder="Groom's Full Name"
        value={formData.groom_full_name || ''}
        onChange={(e) => setFormData({ ...formData, groom_full_name: e.target.value })}
      />

      <button
        className="page1-button"
        onClick={handleNext}
      >
        Next
      </button>
    </div>
  );
}

export default Page1;
