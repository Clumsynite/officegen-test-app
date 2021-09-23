import React from "react";
import { saveAs } from "file-saver";
import creditNote from "./creditNote.json";
export default function Officegen() {
  const onClick = async () => {
    try {
      console.log("Starting......");
      const url = "http://localhost:5000/docx";
      // const url = "http://localhost:3002/v1.0/api/sales_and_logistics/template/credit_note";
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(creditNote),
      });
      console.log("Response: ", res);
      // const image =
      //   "https://images.squarespace-cdn.com/content/5c908e80a9ab952f9d5f9e43/1552977718377-PXOR9FW8ILWM8WP3ZHK6/WebsiteLogo3.png?content-type=image%2Fpng";
      // const imgRes = await fetch(image);
      // const blob = await imgRes.blob();
      const data = await res.blob();
      // const file = new File([data], "creditNote.docx", {
      //   type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      // });
      // setDocs([{ uri: file }]);
      console.log("Finished......", data, res);
      return saveAs(data, "creditNote.docx");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <button onClick={onClick}>Save</button>
    </div>
  );
}
