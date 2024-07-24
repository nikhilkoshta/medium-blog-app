import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign, verify } from 'hono/jwt'
import { signupInput, signinInput } from "@100xdevs/medium-common";

export const userRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string;
        JWT_SECRET: string;
    }
}>();

// Sign Up Route
userRouter.post('/signup', async (c) => {
    const body = await c.req.json();
    const { success } = signupInput.safeParse(body);
    if (!success) {
        c.status(411);
        return c.json({
            message: "Inputs not correct"
        })
    }
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
  
    try {
      const user = await prisma.user.create({
        data: {
          username: body.username,
          password: body.password,
          name: body.name
        }
      })
      const jwt = await sign({
        id: user.id
      }, c.env.JWT_SECRET);
  
      return c.text(jwt)
    } catch(e) {
      console.log(e);
      c.status(411);
      return c.text('Invalid')
    }
  })
  
// Sign In Route
userRouter.post('/signin', async (c) => {
    const body = await c.req.json();
    const { success } = signinInput.safeParse(body);
    if (!success) {
        c.status(411);
        return c.json({
            message: "Inputs not correct"
        })
    }

    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
  
    try {
      const user = await prisma.user.findFirst({
        where: {
          username: body.username,
          password: body.password,
        }
      })
      if (!user) {
        c.status(403);
        return c.json({
          message: "Incorrect credentials"
        })
      }
      const jwt = await sign({
        id: user.id
      }, c.env.JWT_SECRET);
  
      return c.text(jwt)
    } catch(e) {
      console.log(e);
      c.status(411);
      return c.text('Invalid')
    }
  })

// Profile Route
userRouter.get('/profile', async (c) => {
    const authHeader = c.req.header('Authorization');
    if (!authHeader) {
        c.status(403);
        return c.json({ message: "Not authenticated" });
    }

    const token = authHeader.split(' ')[1];
    
    try {
        const decoded = await verify(token, c.env.JWT_SECRET);
        if (!decoded || typeof decoded !== 'object' || !('id' in decoded)) {
            c.status(403);
            return c.json({ message: "Invalid token" });
        }

        const userId = decoded.id;
        const prisma = new PrismaClient({
            datasourceUrl: c.env.DATABASE_URL,
        }).$extends(withAccelerate());

        const user = await prisma.user.findUnique({
            where: {
                id: Number(userId),
            },
        });

        if (!user) {
            c.status(404);
            return c.json({ message: "User not found" });
        }

        return c.json({ user });
    } catch (error) {
        console.log(error);
        c.status(403);
        return c.json({ message: "Not authenticated" });
    }
});

// Update Username Route
userRouter.put('/username', async (c) => {
    const authHeader = c.req.header('Authorization');
    if (!authHeader) {
        c.status(403);
        return c.json({ message: "Not authenticated" });
    }

    const token = authHeader.split(' ')[1];
    const { newUsername } = await c.req.json();

    try {
        const decoded = await verify(token, c.env.JWT_SECRET);
        if (!decoded || typeof decoded !== 'object' || !('id' in decoded)) {
            c.status(403);
            return c.json({ message: "Invalid token" });
        }

        const userId = decoded.id;
        const prisma = new PrismaClient({
            datasourceUrl: c.env.DATABASE_URL,
        }).$extends(withAccelerate());

        await prisma.user.update({
            where: {
                id: Number(userId),
            },
            data: {
                username: newUsername,
            },
        });

        return c.json({ message: "Username updated successfully" });
    } catch (error) {
        console.log(error);
        c.status(500);
        return c.json({ message: "Error updating username" });
    }
});

// Update Password Route
userRouter.put('/password', async (c) => {
    const authHeader = c.req.header('Authorization');
    if (!authHeader) {
        c.status(403);
        return c.json({ message: "Not authenticated" });
    }

    const token = authHeader.split(' ')[1];
    const { newPassword } = await c.req.json();

    try {
        const decoded = await verify(token, c.env.JWT_SECRET);
        if (!decoded || typeof decoded !== 'object' || !('id' in decoded)) {
            c.status(403);
            return c.json({ message: "Invalid token" });
        }

        const userId = decoded.id;
        const prisma = new PrismaClient({
            datasourceUrl: c.env.DATABASE_URL,
        }).$extends(withAccelerate());

        await prisma.user.update({
            where: {
                id: Number(userId),
            },
            data: {
                password: newPassword,
            },
        });

        return c.json({ message: "Password updated successfully" });
    } catch (error) {
        console.log(error);
        c.status(500);
        return c.json({ message: "Error updating password" });
    }
});
