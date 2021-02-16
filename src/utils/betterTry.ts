export default function tryy(promise: any) {
  return promise
    .then((data: any) => [null, data])
    .catch((err: Error) => [err, null]);
}
