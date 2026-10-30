// Dotted grid with blue glows that fades out towards the bottom.
// Place inside a `relative overflow-hidden` parent.
const DottedBackground = () => (
  <div
    aria-hidden
    className="pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,black_35%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_35%,transparent_100%)]"
  >
    <div className="absolute inset-0 [background-size:22px_22px] [background-image:radial-gradient(rgba(0,0,0,0.22)_1px,transparent_1px)] dark:[background-image:radial-gradient(rgba(59,130,246,0.4)_1px,transparent_1px)]" />
    <div className="absolute -top-24 -left-24 h-[28rem] w-[28rem] rounded-full bg-blue-500/25 blur-3xl" />
    <div className="absolute top-1/3 -right-24 h-[30rem] w-[30rem] rounded-full bg-blue-500/10 blur-3xl" />
  </div>
);

export default DottedBackground;
