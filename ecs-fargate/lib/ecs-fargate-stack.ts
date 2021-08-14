import * as cdk from '@aws-cdk/core';
import * as ec2 from '@aws-cdk/aws-ec2';  
import { Peer, Port, SecurityGroup } from '@aws-cdk/aws-ec2';

export class EcsFargateStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here
    // VPC
    const vpc = new ec2.Vpc(this, "sample-vpc", {
      cidr: "10.0.0.0/16",
      enableDnsHostnames: true,
      enableDnsSupport: true,
      subnetConfiguration: [
        {
          cidrMask: 24,
          name: "public",
          subnetType: ec2.SubnetType.PUBLIC,
        },
        {
          cidrMask: 24,
          name: "private",
          subnetType: ec2.SubnetType.ISOLATED,
        },
      ]
    });

    // SecurityGroup
    const securityGroup = new SecurityGroup(this, "sample-sg", {
      vpc: vpc,
    });
    
    // VPCで作成したSubnetにSecurityGroupを紐付ける
    vpc.selectSubnets({ subnetGroupName: 'public' }).subnets.forEach((x) => {
      securityGroup.addIngressRule(Peer.ipv4(x.ipv4CidrBlock), Port.tcp(80));
    });
  }
}
