// import { withAuthenticationRequired } from "react-oidc-context";

import { MessageCard } from "@/components/message";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner";
import { searchOptions } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import { withAuthenticationRequired } from "react-oidc-context";

function Channel() {
  const { data, isLoading } = useQuery(searchOptions(10, 10, "hi"));
  return (
    <div className="flex flex-col p-2 h-full">
      <Input className="w-1/2 outline-4" />
      <div className="flex flex-col p-2 gap-2 h-full">
        {data != undefined &&
          !isLoading &&
          data?.results.map((message) => (
            <MessageCard key={message.id} message={message} />
          ))}
        {isLoading && <Spinner />}
        {!isLoading && (!data || data.results.length === 0) && (
          <div>No messages found</div>
        )}
      </div>
    </div>
  );
}

const AuthenticatedChannel = withAuthenticationRequired(Channel, {
  OnRedirecting: () => <div>Redirecting...</div>,
});
export default AuthenticatedChannel;
