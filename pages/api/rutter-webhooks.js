import axios from "axios";

// handles webhooks generated by Rutter
export default async (req, res) => {
  if (req.method === "POST") {
    // Process a POST request
    const { type, code } = req.body;
    if (type === "CONNECTION" && code === "INITIAL_UPDATE") {
      // handler code for a connection that has data loaded
      console.log(req.body);
    }
  } else {
    // Handle any other HTTP method
    res.statusCode(401).json({
      error_message: "Unauthorized Method",
    });
  }
};
