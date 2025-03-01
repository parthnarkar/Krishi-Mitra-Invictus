import { useState } from "react";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import Table from "../components/ui/Table";
import Dialog from "../components/ui/Dialog";
import TimePicker from "react-time-picker";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";

const MedicineManager = () => {
  const [medicines, setMedicines] = useState([]);
  const [medicineName, setMedicineName] = useState("");
  const [medicineTime, setMedicineTime] = useState("");
  const [mealTiming, setMealTiming] = useState("Before Meal"); // Default option
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const addMedicine = () => {
    if (!medicineName || !medicineTime || !mealTiming) return;
    setMedicines([...medicines, { name: medicineName, time: medicineTime, meal: mealTiming }]);
    setMedicineName("");
    setMedicineTime("");
    setMealTiming("Before Meal");
    setIsDialogOpen(false);
  };

  const deleteMedicine = (index) => {
    setMedicines(medicines.filter((_, idx) => idx !== index));
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Medicine Manager</h1>

      <Card>
        <Button onClick={() => setIsDialogOpen(true)}>Add Medicine</Button>
      </Card>

      <Table headers={["Name", "Time", "Meal Timing"]} data={medicines} onDelete={deleteMedicine} />

      <Dialog isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)}>
        <h2 className="text-lg font-bold mb-2">Add Medicine</h2>

        {/* Medicine Name Input */}
        <Input placeholder="Medicine Name" value={medicineName} onChange={(e) => setMedicineName(e.target.value)} />

        {/* Time Picker Input */}
        <TimePicker
          onChange={setMedicineTime}
          value={medicineTime}
          className="mt-2 px-4 py-2 w-full bg-gray-100 rounded-lg border border-gray-300 shadow-inner focus:ring-2 focus:ring-blue-400 focus:outline-none"
          disableClock={false} // Enables clock popup
        />

        {/* Dropdown for Meal Timing */}
        <select
          value={mealTiming}
          onChange={(e) => setMealTiming(e.target.value)}
          className="mt-2 px-4 py-2 w-full bg-gray-100 rounded-lg border border-gray-300 shadow-inner focus:ring-2 focus:ring-blue-400 focus:outline-none"
        >
          <option value="Before Meal">Before Meal</option>
          <option value="After Meal">After Meal</option>
        </select>

        {/* Save Button */}
        <Button onClick={addMedicine} className="mt-4">Save</Button>
      </Dialog>
    </div>
  );
};

export default MedicineManager;
