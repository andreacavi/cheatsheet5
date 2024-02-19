export default function useEffectEl() {
  return (
    <div className="hook_container">
      <h1>React Hooks | useEffect</h1>
      <p>
        useEffect is used to perform a side effect, which means to perform an
        operation that exists outside of our app that does not have a
        predictable result.
      </p>
      <h2>basic syntax</h2>
      <img src="./1.JPG" alt="" />

      <h2>Step 1: useEffect</h2>
      <p>
        If we want to interact with the “outside world”, such as using an API,
        we use the useEffect hook.
      </p>
      <img src="./2.JPG" alt="use" />
      <br />
      <h2>Step 2: useEffect</h2>
      <p>
        If we want to fetch data, we would use useEffect, such as in fetching
        and displaying a list of posts:
      </p>
      <h2>Step 3: useEffect</h2>
      <p>
        If we need to use a value that comes from outside the effect function,
        it must be included in the dependencies array. If that value changes,
        the effect function will be rexecuted. For example, here is a bit of
        code that adds or removes the class “overflow-hidden” to the body
        element whenever the mobile menu is opened or closed.
      </p>
      <img src="./3.JPG" alt="use" />
      <h2>Find more information about useEffect in this youtube video</h2>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/gv9ugDJ1ynU?si=WHqB3aZL2HH-ZmIs"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
}
