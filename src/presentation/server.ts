import express from "express";
import path from "path";

interface ServerOptions {
  port: number;
  publicPath: string;
}

export class Server {
  private app = express();
  private readonly port: number;
  private readonly publicPath: string;

  constructor(options: ServerOptions) {
    const { port, publicPath } = options;
    this.port = port;
    this.publicPath = publicPath;
  }

  async start() {

    // * Middlewares

    // * Public folder
    this.app.use(express.static(this.publicPath));

    this.app.get("/{*splat}", (req, res) => {
      const indexPath = path.join(__dirname, `../../${this.publicPath}/index.html`);
      res.sendFile(indexPath);
    });

    this.app.listen(this.port, () => {
      console.log(`Server running on port ${this.port}`);
    });
  }
}
