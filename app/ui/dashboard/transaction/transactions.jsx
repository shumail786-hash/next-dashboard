import Image from "next/image";
import moment from "moment";
const Transactions = () => {
  return (
    <div className="bg-clrBgSoft px-5 py-5 rounded-lg">
      <h2 className="mb-5 font-medium text-clrTextSoft">Latest Transaction</h2>
      <table className="w-full t-table">
        <thead>
          <tr>
            <td>Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Amount</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="flex items-center gap-3">
                <Image
                  src="/noavatar.png"
                  height={40}
                  width={40}
                  alt="user"
                  className="object-cover rounded-full"
                />
                John Doe
              </div>
            </td>
            <td>
              <span className="rounded-md px-2 py-1 text-clrText text-sm bg-pending">
                Pending
              </span>
            </td>
            <td>{moment().format("DD-MM-YYYY")}</td>
            <td>$3.20</td>
          </tr>

          <tr>
            <td>
              <div className="flex items-center gap-3">
                <Image
                  src="/noavatar.png"
                  height={40}
                  width={40}
                  alt="user"
                  className="object-cover rounded-full"
                />
                John Doe
              </div>
            </td>
            <td>
              <span className="rounded-md px-2 py-1 text-clrText text-sm bg-done">
                Done
              </span>
            </td>
            <td>{moment().format("DD-MM-YYYY")}</td>
            <td>$3.20</td>
          </tr>

          <tr>
            <td>
              <div className="flex items-center gap-3">
                <Image
                  src="/noavatar.png"
                  height={40}
                  width={40}
                  alt="user"
                  className="object-cover rounded-full"
                />
                John Doe
              </div>
            </td>
            <td>
              <span className="rounded-md px-2 py-1 text-clrText text-sm bg-cancelled">
                Cancelled
              </span>
            </td>
            <td>{moment().format("DD-MM-YYYY")}</td>
            <td>$3.20</td>
          </tr>

          <tr>
            <td>
              <div className="flex items-center gap-3">
                <Image
                  src="/noavatar.png"
                  height={40}
                  width={40}
                  alt="user"
                  className="object-cover rounded-full"
                />
                John Doe
              </div>
            </td>
            <td>
              <span className="rounded-md px-2 py-1 text-clrText text-sm bg-pending">
                Pending
              </span>
            </td>
            <td>{moment().format("DD-MM-YYYY")}</td>
            <td>$3.20</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;
