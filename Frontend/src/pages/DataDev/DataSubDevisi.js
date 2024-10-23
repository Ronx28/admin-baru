import React, { useState, useEffect } from 'react';


export default function DataSubDevisi() {
  const [subDevisiData, setSubDevisiData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [deletingId, setDeletingId] = useState(null);

  useEffect(() => {
    const fetchSubDevisiData = async () => {
      try {
        setLoading(true);
        const response = await fetch('http://localhost:4000/api/subDevisi');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setSubDevisiData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSubDevisiData();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm('Apakah Anda yakin ingin menghapus data ini?')) {
      return;
    }

    try {
      setDeletingId(id);
      const response = await fetch(`http://localhost:4000/api/subDevisi/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Gagal menghapus data');
      }

      setSubDevisiData(prevData => prevData.filter((item) => item.id !== id));
    } catch (error) {
      alert(`Error: ${error.message}`);
    } finally {
      setDeletingId(null);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="main__table">
      <table id="subDevisiTable">
        <thead>
          <tr>
            <th>No</th>
            <th>Nama Sub Devisi</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {subDevisiData.map((row, index) => (
            <tr key={row.id}>
              <td>{index + 1}</td>
              <td>{row.namaSubDevisi}</td>
              <td>
                {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(row.id)}
                  disabled={deletingId === row.id}
                >
                  {deletingId === row.id ? 'Deleting...' : 'Delete'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
