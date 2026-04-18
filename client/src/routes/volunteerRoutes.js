router.put("/availability", async (req, res) => {
  try {
    const { email, availability } = req.body;

    const updated = await prisma.volunteer.update({
      where: { email },
      data: { availability },
    });

    res.json({ message: "Updated", user: updated });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});