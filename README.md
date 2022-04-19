## Demo here: https://future-app-nine.vercel.app/

### Technologies Used
Next.js, React-Query, Styled Components, Axios

This app features the following:

1. A pane on the left that allows you to browse all of the available exercises as a list of exercise names
2. A way to highlight and select an exercise from the left pane and see the description and video of the selected exercise in a detail pane on the right
3. A sticky pane at the top of the left pane that provides a way to live-filter the exercise list by name by way of text input.
4. A display for more details of a given exercise
5. A fully Responsive solution (mobile, tablet, desktop)
6. A way to respond to a path in the URL (used path intead of query string) and automatically select that exercise and display its detail
7. A display for more details of a given exercise.

- I utilized nextjs path instead of query string params as I felt this would be faster to implement with the given time constraints
- I was unable to add the optional filters due to time constraints

---

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
