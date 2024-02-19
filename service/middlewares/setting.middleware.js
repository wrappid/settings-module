export const testMiddleware = (req: any, res: any, next: any) => {
  try {
    // logger implementation pending
    next();
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};