import { Address, BigInt } from "@graphprotocol/graph-ts";

// Initialize a Token Definition with the attributes
export class StaticTokenDefinition {
  address: Address;
  symbol: string;
  name: string;
  decimals: BigInt;

  // Initialize a Token Definition with its attributes
  constructor(address: Address, symbol: string, name: string, decimals: BigInt) {
    this.address = address;
    this.symbol = symbol;
    this.name = name;
    this.decimals = decimals;
  }

  // Get all tokens with a static defintion
  static getStaticDefinitions(): Array<StaticTokenDefinition> {
    let staticDefinitions = new Array<StaticTokenDefinition>(6);
    // Add CBON
    let tokenCBON = new StaticTokenDefinition(
      Address.fromString('0x6e64fcf15be3eb71c3d42acf44d85bb119b2d98b'),
      'CBON',
      'CADINU Bonus',
      BigInt.fromI32(18)
    )
    staticDefinitions.push(tokenCBON)

    // Add CADINU
    let tokenCADINU = new StaticTokenDefinition(
      Address.fromString('0x6e64fCF15Be3eB71C3d42AcF44D85bB119b2D98b'),
      'CADINU',
      'Canadian Inuit Dog V2',
      BigInt.fromI32(18)
    )
    staticDefinitions.push(tokenCBON)

    return staticDefinitions;
  }

  // Helper for hardcoded tokens
  static fromAddress(tokenAddress: Address): StaticTokenDefinition | null {
    let staticDefinitions = this.getStaticDefinitions()
    let tokenAddressHex = tokenAddress.toHexString()

    // Search the definition using the address
    for (let i = 0; i < staticDefinitions.length; i++) {
      let staticDefinition = staticDefinitions[i]
      if (staticDefinition.address.toHexString() == tokenAddressHex) {
        return staticDefinition
      }
    }

    // If not found, return null
    return null
  }
}
