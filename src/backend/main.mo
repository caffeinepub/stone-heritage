import Iter "mo:core/Iter";
import Int "mo:core/Int";
import Runtime "mo:core/Runtime";
import Order "mo:core/Order";
import Principal "mo:core/Principal";
import Time "mo:core/Time";
import Text "mo:core/Text";
import Map "mo:core/Map";
import Array "mo:core/Array";

actor {
  type ContactSubmission = {
    name : Text;
    email : Text;
    message : Text;
    timestamp : Time.Time;
  };

  module ContactSubmission {
    public func compare(a : ContactSubmission, b : ContactSubmission) : Order.Order {
      Int.compare(b.timestamp, a.timestamp); // Newest first
    };
  };

  let adminMap = Map.singleton(
    Principal.fromText("2vxsx-fae"),
    true
  );

  func checkAdmin(caller : Principal) {
    if (not adminMap.containsKey(caller)) {
      Runtime.trap("Permission denied: caller is not an admin.");
    };
  };

  let submissions = Map.empty<Text, ContactSubmission>();

  public shared ({ caller }) func submitContactForm(name : Text, email : Text, message : Text) : async Text {
    let timestamp = Time.now();
    let id = timestamp.toText();
    let submission : ContactSubmission = {
      name;
      email;
      message;
      timestamp;
    };
    submissions.add(id, submission);
    id;
  };

  public shared ({ caller }) func getAllSubmissions() : async [ContactSubmission] {
    checkAdmin(caller);
    submissions.values().toArray().sort();
  };
};
