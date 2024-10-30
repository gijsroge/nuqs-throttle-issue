import { Form } from "@remix-run/react";
import { parseAsString, useQueryState } from "nuqs";

export const loader = async () => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return { data: "dummy" };
};

export default function Index() {
  const [search, setSearch] = useQueryState(
    "search",
    parseAsString
      .withOptions({ throttleMs: 1000, shallow: false })
      .withDefault("")
  );

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-16">
        <Form>
          <label htmlFor="">Search</label>
          <input
            style={{ border: "1px solid white", borderRadius: "5px" }}
            type="search"
            value={search}
            onChange={(event) => {
              console.log(event.target.value);
              setSearch(event.target.value);
            }}
          />
        </Form>
      </div>
    </div>
  );
}
