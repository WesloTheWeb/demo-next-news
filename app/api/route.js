// ? Sets up route handler. Returns json

export function GET(request) {
    console.log(request);

    return new Response('Hello');
};
