process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
const cors = require("cors");

require("dotenv").config();

console.log("SUPABASE_URL:", process.env.SUPABASE_URL);
console.log("SUPABASE_KEY exists:", !!process.env.SUPABASE_KEY);
const express = require("express");
const { createClient } = require("@supabase/supabase-js");
const app = express();
app.use(cors());
const PORT = 2500;

app.use(express.json());

const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_KEY
);

app.get("/ping", (req, res) => {
    res.send("Streznik deluje");
});

app.get("/racunalniki", async (req, res) => {
    const { data, error } = await supabase
        .from("racunalniki")
        .select("*")
        .order("id", { ascending: true });

    if (error) {
        return res.status(500).json({ error: error.message });
    }

    res.json(data);
});

app.post("/racunalniki", async (req, res) => {
    console.log("Content-Type received:", req.headers["content-type"]);
    console.log("Body received:", req.body);
    const {
        znamka,
        model,
        cena,
        datum_nakupa
    } = req.body;

    const {
        data,
        error
    } = await supabase
        .from("racunalniki")
        .insert ({znamka, model, cena, datum_nakupa})
        .select();
    if (error) {
        return res.status(500).json({ error: error.message });
}
    res.status(201).json(data);});

app.delete("/racunalniki/:id", async (req, res) => {
    const { id } = req.params;

    const { data, error } = await supabase
        .from("racunalniki")
        .delete()
        .eq("id", id)
        .select();

    if (error) {
        return res.status(500).json({ error: error.message });
    }

    res.status(200).json(data);
});

app.listen(PORT, () => {
    console.log(`Streznik dela na portu ${PORT}`);
});