import Map "mo:core/Map";
import Iter "mo:core/Iter";
import Order "mo:core/Order";
import Array "mo:core/Array";
import Runtime "mo:core/Runtime";
import Time "mo:core/Time";
import Int "mo:core/Int";
import Text "mo:core/Text";

actor {
  type Submission = {
    name : Text;
    email : Text;
    company : Text;
    message : Text;
    timestamp : Time.Time;
  };

  module Submission {
    public func compare(a : Submission, b : Submission) : Order.Order {
      Int.compare(a.timestamp, b.timestamp);
    };
  };

  let submissions = Map.empty<Time.Time, Submission>();

  public shared ({ caller }) func submitContactForm(name : Text, email : Text, company : Text, message : Text) : async () {
    let timestamp = Time.now();
    let submission : Submission = {
      name;
      email;
      company;
      message;
      timestamp;
    };
    submissions.add(timestamp, submission);
  };

  public query ({ caller }) func getAllSubmissions() : async [Submission] {
    let iter = submissions.values();
    iter.toArray().sort();
  };

  public query ({ caller }) func getSubmissionByTimestamp(timestamp : Time.Time) : async Submission {
    switch (submissions.get(timestamp)) {
      case (null) { Runtime.trap("Submission not found") };
      case (?submission) { submission };
    };
  };
};
