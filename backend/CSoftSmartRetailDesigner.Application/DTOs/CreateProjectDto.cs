namespace CSoftSmartRetailDesigner.Application.DTOs;

public class CreateProjectDto
{
    public string Name { get; set; } = string.Empty;
    public string StoreType { get; set; } = string.Empty;
    public double Area { get; set; }
}