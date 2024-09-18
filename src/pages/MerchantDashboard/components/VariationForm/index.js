import React, { useState } from "react";
import { LiaTimesSolid } from "react-icons/lia";
import { IoMdAdd } from "react-icons/io";

function VariationForm({ onChange }) {
    const [sections, setSections] = useState([
        { id: 1, variationType: "", variation: "" },
    ]);

    const addSection = () => {
        setSections([
            ...sections,
            { id: sections.length + 1, variationType: "", variation: "" },
        ]);
    };

    const removeSection = (id) => {
        setSections(sections.filter((section) => section.id !== id));
    };

    const handleInputChange = (index, event) => {
        const newSections = [...sections];
        newSections[index][event.target.variation] = event.target.value;
        setSections(newSections);
        onChange(newSections); // Notify parent component about the change
    };

    return (
        <div>
            {sections.map((section, index) => (
                <div key={section.id} className="row align-items-end mb-3">
                    <div className="col-md-5">
                        <label className="form-label">Variation Type</label>
                        <select
                            name="variationType"
                            value={section.variationType}
                            onChange={(event) =>
                                handleInputChange(index, event)
                            }
                            className="form-select w-100">
                            <option value="">Select a variation . . .</option>
                            <option value="USA">USA</option>
                            <option value="Canada">Canada</option>
                            <option value="UK">UK</option>
                        </select>
                    </div>

                    <div className="col-md-5">
                        <label className="form-label">Variation</label>
                        <input
                            type="text"
                            name="variation"
                            value={section.variation}
                            className="form-control"
                            placeholder="Variation . . ."
                            onChange={(event) =>
                                handleInputChange(index, event)
                            }
                        />
                    </div>

                    {sections.length > 1 && (
                        <div className="col-md-2">
                            <button
                                type="button"
                                className="btn p-2 btn-light"
                                style={{
                                    backgroundColor: "#FCDAD7",
                                    color: "#F04438",
                                }}
                                onClick={() => removeSection(section.id)}>
                                <LiaTimesSolid />
                            </button>
                        </div>
                    )}
                </div>
            ))}
            <button
                className="btn"
                style={{
                    backgroundColor: "#BFECC180",
                    color: "#00B207",
                    fontWeight: "600",
                }}
                type="button"
                onClick={addSection}>
                <IoMdAdd style={{ fontSize: "20px" }} /> Add Variant
            </button>
        </div>
    );
}

export default VariationForm;
