import QRCode from "qrcode";
import { useState, useEffect } from "react";
import axios from "axios";
function QRgenerate() {
  const [temp, setTemp] = useState("");
  const [qr, setQR] = useState("");
  const [student, setStudent] = useState([]);
  const GenerateQRCode = async () => {
    try {
      const findstudent = student.find((s) => s.id == temp);
      if (!findstudent) {
        alert("Student doesn't exists");
      } else {
        const response = await QRCode.toDataURL(findstudent.hashed_id);
        setQR(response);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    (async () => {
      const string = {
        idLike: temp + "%",
      };
      const result = await axios.post(
        `http://localhost:3010/student/like`,
        string
      );
      setStudent(result.data);

      console.log(student);
    })();
  }, [temp]);

  return (
    <div>
      <h1>QR Generator</h1>
      <input
        type="text"
        placeholder="Search Students here"
        value={temp}
        onChange={(e) => setTemp(e.target.value)}
      />
      <button onClick={GenerateQRCode}>Generate</button>
      {qr && (
        <>
          <img src={qr} download />
        </>
      )}
      <div>
        Suggestions:
        {student.map((s) => (
          <h2 key={s.id}>{s.id}</h2>
        ))}
      </div>
    </div>
  );
}

export default QRgenerate;
