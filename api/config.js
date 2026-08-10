module.exports = (req, res) => {
  res.setHeader('Cache-Control', 'public, max-age=300');
  res.status(200).json({
    supabaseUrl: process.env.SUPABASE_URL,
    supabaseKey: process.env.SUPABASE_KEY,
  });
};
