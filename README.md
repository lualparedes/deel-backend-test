# Deel Backend Test

## How to run

### Considerations

- Make sure that port `3000` is available.

### Using Docker

1. Build the image (you'll need to be in the root directory of this repository)
    ```
    docker build -t deel-back .
    ```
1. Run the image you just built
    ```
    docker run -it --rm -p 3000:3000 deel-back
    ```

### Using a local Node installation

1. Make sure you have Node 18
1. Run the development server
    ```
    npm run dev
    ```

